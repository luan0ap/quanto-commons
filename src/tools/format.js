/**
 * Created by Lucas Teske on 02/05/17.
 */

import {
  undefinedOrNull,
} from './validation';

import removeDiactrics from './removeDiactrics';

const maskStartRegExp = /^([^#ANX]+)/;
/**
 * Simple format function borrowed from PureMask.js
 * {@link https://github.com/romulobrasil/PureMask.js}
 *
 * @param {String} data String to mask (input value)
 * @param {String} [mask] Mask format, like `####-##`
 * @returns {string} Formatted text
 */
const format = (data: string, mask: string) => {
  // don't do anything if mask is undefined/null/etc
  if(undefinedOrNull(mask) || typeof mask !== "string") {
    return data;
  }

  if (data.length === 1 && maskStartRegExp.test(mask)) {
    data = maskStartRegExp.exec(mask)[0] + data;
  }

  let text = '';

  // Adds a char offset to allow testing on optional values
  let cOffset = 0;

  // Cleans data to  avoid value loss on dynamic mask changing
  for (let i = 0; i < mask.length; i++) {
    let m = mask.charAt(i);
    switch(m) {
      case '#' : break;
      case 'A' : break;
      case '?' : break;
      case 'N' : break;
      case 'X' : break;
      default : data = data.replace(m, '')
    }
  }

  for (let i = 0, x = 1; x && i < mask.length; ++i) {
    let c = data.charAt(i - cOffset);
    let m = mask.charAt(i);

    switch (m) {
      case '#' : if (/\d/.test(c))        { text += c } else { x = 0 } break;
      case 'A' : if (/[a-z]/i.test(c))    { text += c } else { x = 0 } break;
      case 'N' : if (/[a-z0-9]/i.test(c)) { text += c } else { x = 0 } break;
      case '?' : cOffset++; break;
      case 'X' : text += c; break;
      default  :
        text += m;
        if (c && c !== m) {
          data = ' ' + data;
        }
        break;
    }
  }
  return text;
};

/**
 * Formats an number given the mask.
 * @param strFormat [mask] Mask format, like `####-##`
 * @returns {string}
 */
Number.prototype.format = function (strFormat) {
  return format(this.toString(), strFormat);
};

/**
 * Formats a string given mask
 * @param strFormat [mask] Mask format, like `####-##`
 * @returns {string}
 */
String.prototype.format = function (strFormat) {
  return format(this, strFormat);
};

/**
 * Normalize the string by removing non ASCII chars
 */
String.prototype.removeDiactrics = function () {
  return removeDiactrics(this);
};

/**
 * Converts the integer to a formatted money string like: 123456789.541 to 123.456.789,54
 * @param decimals Number of decimal numbers (optional, default 2)
 * @param decimalSeparator Decimal Separator character (optional, default ',')
 * @param separator Mils Separator Character (optional, default '.')
 * @returns {string} Formatted money string
 */
Number.prototype.toMoney = function (decimals, decimalSeparator, separator) {
  const c = isNaN(Math.abs(decimals)) ? 2 : Math.abs(decimals);
  const d = undefinedOrNull(decimalSeparator) ? "," : decimalSeparator;
  const t = undefinedOrNull(separator) ? "." : separator;

  const s = this < 0 ? "-" : "";
  const iN = parseInt(Math.abs(Number(this) || 0).toFixed(c));
  console.log(this, s);
  const i = String(iN);
  const j = i.length > 3 ? i.length % 3 : 0;
  return s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c ? d + Math.abs(Math.abs(this) - iN).toFixed(c).slice(2) : "");
};

/**
 * Left Pads a number with representing character.
 * @param n the number
 * @param chr the representing character, defaults to '0'
 * @returns {string}
 */
Number.prototype.padLeft = function (n, chr) {
  return (this < 0 ? '-' : '') + new Array(n-String(Math.abs(this)).length+1) .join(chr||'0') + (Math.abs(this));
};

export default format;