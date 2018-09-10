'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _helpers = require('./helpers');

/**
 * Created by Lucas Teske on 07/09/18.
 * 
 */

var serializeFingerPrint = function serializeFingerPrint(value) {
  var result = value && typeof value.valueOf === 'function' ? value.valueOf() : value;

  if (typeof Buffer !== 'undefined' && result instanceof Buffer) {
    return result.toString('hex').toUpperCase();
  }

  if (typeof ArrayBuffer !== 'undefined' && (result instanceof ArrayBuffer || result instanceof Uint8Array)) {
    return (0, _helpers.uint8arr2hex)(new Uint8Array(result));
  }

  if (typeof result === 'string') {
    if (!_helpers.validateHex.test(result)) {
      throw new TypeError('Fingerprint cannot represent value: ' + value);
    }
    return result.toUpperCase();
  }

  if ((0, _helpers.isFinite)(result)) {
    return result.toString(16).toUpperCase();
  }

  throw new TypeError('Fingerprint cannot represent value: ' + JSON.stringify(value));
};

var coerceFingerPrint = function coerceFingerPrint(value) {
  if ((0, _helpers.isInteger)(value)) {
    return value.toString(16).toUpperCase();
  }

  if (typeof value !== 'string') {
    throw new TypeError('String cannot represent a non string / hexadecimal / integer value: ' + JSON.stringify(value));
  } else if (!(0, _helpers.validateHex)(value)) {
    throw new TypeError('String cannot represent a non string / hexadecimal / integer value: ' + value);
  }

  return value.toString().toUpperCase();
};

var parseAstFingerprint = function parseAstFingerprint(ast) {
  switch (ast.kind) {
    case _graphql.Kind.STRING:
      return ast.value;
    case _graphql.Kind.INT:
      return parseInt(ast.value, 10);
    default:
      return undefined;
  }
};

exports.default = new _graphql.GraphQLScalarType({
  name: 'FingerPrint',
  description: 'The `FingerPrint` scalar type represents a Key FingerPrint data, represented as uppercase HEX' + 'character sequences.',
  serialize: serializeFingerPrint,
  parseValue: coerceFingerPrint,
  parseLiteral: parseAstFingerprint
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvR1FMVHlwZXMvZmluZ2VycHJpbnQuanMiXSwibmFtZXMiOlsic2VyaWFsaXplRmluZ2VyUHJpbnQiLCJ2YWx1ZSIsInJlc3VsdCIsInZhbHVlT2YiLCJCdWZmZXIiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiQXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwidmFsaWRhdGVIZXgiLCJ0ZXN0IiwiVHlwZUVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZXJjZUZpbmdlclByaW50IiwicGFyc2VBc3RGaW5nZXJwcmludCIsImFzdCIsImtpbmQiLCJLaW5kIiwiU1RSSU5HIiwiSU5UIiwicGFyc2VJbnQiLCJ1bmRlZmluZWQiLCJHcmFwaFFMU2NhbGFyVHlwZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNlcmlhbGl6ZSIsInBhcnNlVmFsdWUiLCJwYXJzZUxpdGVyYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOztBQUtBOztBQVZBOzs7OztBQWlCQSxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQWtCO0FBQzdDLE1BQU1DLFNBQVNELFNBQVMsT0FBT0EsTUFBTUUsT0FBYixLQUF5QixVQUFsQyxHQUErQ0YsTUFBTUUsT0FBTixFQUEvQyxHQUFpRUYsS0FBaEY7O0FBRUEsTUFBSSxPQUFPRyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDRixrQkFBa0JFLE1BQXZELEVBQStEO0FBQzdELFdBQU9GLE9BQU9HLFFBQVAsQ0FBZ0IsS0FBaEIsRUFBdUJDLFdBQXZCLEVBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9DLFdBQVAsS0FBdUIsV0FBdkIsS0FBdUNMLGtCQUFrQkssV0FBbEIsSUFBaUNMLGtCQUFrQk0sVUFBMUYsQ0FBSixFQUEyRztBQUN6RyxXQUFPLDJCQUFhLElBQUlBLFVBQUosQ0FBZU4sTUFBZixDQUFiLENBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsUUFBSSxDQUFDTyxxQkFBWUMsSUFBWixDQUFpQlIsTUFBakIsQ0FBTCxFQUErQjtBQUM3QixZQUFNLElBQUlTLFNBQUosMENBQXFEVixLQUFyRCxDQUFOO0FBQ0Q7QUFDRCxXQUFPQyxPQUFPSSxXQUFQLEVBQVA7QUFDRDs7QUFFRCxNQUFJLHVCQUFTSixNQUFULENBQUosRUFBc0I7QUFDcEIsV0FBT0EsT0FBT0csUUFBUCxDQUFnQixFQUFoQixFQUFvQkMsV0FBcEIsRUFBUDtBQUNEOztBQUVELFFBQU0sSUFBSUssU0FBSiwwQ0FBcURDLEtBQUtDLFNBQUwsQ0FBZVosS0FBZixDQUFyRCxDQUFOO0FBQ0QsQ0F2QkQ7O0FBeUJBLElBQU1hLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNiLEtBQUQsRUFBMkI7QUFDbkQsTUFBSSx3QkFBVUEsS0FBVixDQUFKLEVBQXNCO0FBQ3BCLFdBQU9BLE1BQU1JLFFBQU4sQ0FBZSxFQUFmLEVBQW1CQyxXQUFuQixFQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPTCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFVBQU0sSUFBSVUsU0FBSiwwRUFBcUZDLEtBQUtDLFNBQUwsQ0FBZVosS0FBZixDQUFyRixDQUFOO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQywwQkFBWUEsS0FBWixDQUFMLEVBQXlCO0FBQzlCLFVBQU0sSUFBSVUsU0FBSiwwRUFBcUZWLEtBQXJGLENBQU47QUFDRDs7QUFFRCxTQUFPQSxNQUFNSSxRQUFOLEdBQWlCQyxXQUFqQixFQUFQO0FBQ0QsQ0FaRDs7QUFjQSxJQUFNUyxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUFDQyxHQUFELEVBQVM7QUFDbkMsVUFBUUEsSUFBSUMsSUFBWjtBQUNFLFNBQUtDLGNBQUtDLE1BQVY7QUFBa0IsYUFBT0gsSUFBSWYsS0FBWDtBQUNsQixTQUFLaUIsY0FBS0UsR0FBVjtBQUFlLGFBQU9DLFNBQVNMLElBQUlmLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNmO0FBQVMsYUFBT3FCLFNBQVA7QUFIWDtBQUtELENBTkQ7O2tCQVFlLElBQUlDLDBCQUFKLENBQXNCO0FBQ25DQyxRQUFNLGFBRDZCO0FBRW5DQyxlQUNBLGtHQUNBLHNCQUptQztBQUtuQ0MsYUFBVzFCLG9CQUx3QjtBQU1uQzJCLGNBQVliLGlCQU51QjtBQU9uQ2MsZ0JBQWNiO0FBUHFCLENBQXRCLEMiLCJmaWxlIjoiZmluZ2VycHJpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDcvMDkvMTguXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7XG4gIEdyYXBoUUxTY2FsYXJUeXBlLFxuICBLaW5kLFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHtcbiAgaXNGaW5pdGUsXG4gIGlzSW50ZWdlcixcbiAgdWludDhhcnIyaGV4LFxuICB2YWxpZGF0ZUhleCxcbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3Qgc2VyaWFsaXplRmluZ2VyUHJpbnQgPSAodmFsdWU6IG1peGVkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHJlc3VsdCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoJ2hleCcpLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiAocmVzdWx0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgcmVzdWx0IGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICByZXR1cm4gdWludDhhcnIyaGV4KG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKCF2YWxpZGF0ZUhleC50ZXN0KHJlc3VsdCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEZpbmdlcnByaW50IGNhbm5vdCByZXByZXNlbnQgdmFsdWU6ICR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQudG9VcHBlckNhc2UoKTtcbiAgfVxuXG4gIGlmIChpc0Zpbml0ZShyZXN1bHQpKSB7XG4gICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoYEZpbmdlcnByaW50IGNhbm5vdCByZXByZXNlbnQgdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xufTtcblxuY29uc3QgY29lcmNlRmluZ2VyUHJpbnQgPSAodmFsdWU6IG1peGVkKSA6IHN0cmluZyA9PiB7XG4gIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBTdHJpbmcgY2Fubm90IHJlcHJlc2VudCBhIG5vbiBzdHJpbmcgLyBoZXhhZGVjaW1hbCAvIGludGVnZXIgdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xuICB9IGVsc2UgaWYgKCF2YWxpZGF0ZUhleCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBTdHJpbmcgY2Fubm90IHJlcHJlc2VudCBhIG5vbiBzdHJpbmcgLyBoZXhhZGVjaW1hbCAvIGludGVnZXIgdmFsdWU6ICR7dmFsdWV9YCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpO1xufTtcblxuY29uc3QgcGFyc2VBc3RGaW5nZXJwcmludCA9IChhc3QpID0+IHtcbiAgc3dpdGNoIChhc3Qua2luZCkge1xuICAgIGNhc2UgS2luZC5TVFJJTkc6IHJldHVybiBhc3QudmFsdWU7XG4gICAgY2FzZSBLaW5kLklOVDogcmV0dXJuIHBhcnNlSW50KGFzdC52YWx1ZSwgMTApO1xuICAgIGRlZmF1bHQ6IHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gIG5hbWU6ICdGaW5nZXJQcmludCcsXG4gIGRlc2NyaXB0aW9uOlxuICAnVGhlIGBGaW5nZXJQcmludGAgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyBhIEtleSBGaW5nZXJQcmludCBkYXRhLCByZXByZXNlbnRlZCBhcyB1cHBlcmNhc2UgSEVYJyArXG4gICdjaGFyYWN0ZXIgc2VxdWVuY2VzLicsXG4gIHNlcmlhbGl6ZTogc2VyaWFsaXplRmluZ2VyUHJpbnQsXG4gIHBhcnNlVmFsdWU6IGNvZXJjZUZpbmdlclByaW50LFxuICBwYXJzZUxpdGVyYWw6IHBhcnNlQXN0RmluZ2VycHJpbnQsXG59KTtcbiJdfQ==