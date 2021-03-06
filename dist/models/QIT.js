'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultNotificationArgs = exports.ExtractDefaultDestinationQITArgs = exports.ExtractDefaultSourceQITArgs = exports.ExtractDefaultQITArgs = exports.DefaultDestinationQITArgs = exports.DefaultSourceQITArgs = exports.DefaultQITArgs = undefined;

var _graphql = require('graphql');

var _Notification = require('./Notification');

/**
 * Created by Lucas Teske on 31/08/18.
 * 
 */
var DefaultQITArgs = exports.DefaultQITArgs = {
  routingType: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Routing Type'
  },
  routingNumber: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Routing Number'
  }
};

var DefaultSourceQITArgs = exports.DefaultSourceQITArgs = {
  srcRoutingType: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Source Routing Type'
  },
  srcRoutingNumber: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Source Routing Number'
  }
};

var DefaultDestinationQITArgs = exports.DefaultDestinationQITArgs = {
  dstRoutingType: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Destination Routing Type'
  },
  dstRoutingNumber: {
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    description: 'Destination Routing Number'
  }
};

var ExtractDefaultQITArgs = exports.ExtractDefaultQITArgs = function ExtractDefaultQITArgs(data) {
  return {
    routingType: data.routingType,
    routingNumber: data.routingNumber
  };
};

var ExtractDefaultSourceQITArgs = exports.ExtractDefaultSourceQITArgs = function ExtractDefaultSourceQITArgs(data) {
  return {
    srcRoutingType: data.srcRoutingType,
    srcRoutingNumber: data.srcRoutingNumber
  };
};

var ExtractDefaultDestinationQITArgs = exports.ExtractDefaultDestinationQITArgs = function ExtractDefaultDestinationQITArgs(data) {
  return {
    dstRoutingType: data.dstRoutingType,
    dstRoutingNumber: data.dstRoutingNumber
  };
};

var DefaultNotificationArgs = exports.DefaultNotificationArgs = {
  notification: {
    type: new _graphql.GraphQLList(_Notification.NotificationInput),
    description: 'Notifications'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUUlULmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRRSVRBcmdzIiwicm91dGluZ1R5cGUiLCJ0eXBlIiwiR3JhcGhRTE5vbk51bGwiLCJHcmFwaFFMU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJyb3V0aW5nTnVtYmVyIiwiRGVmYXVsdFNvdXJjZVFJVEFyZ3MiLCJzcmNSb3V0aW5nVHlwZSIsInNyY1JvdXRpbmdOdW1iZXIiLCJEZWZhdWx0RGVzdGluYXRpb25RSVRBcmdzIiwiZHN0Um91dGluZ1R5cGUiLCJkc3RSb3V0aW5nTnVtYmVyIiwiRXh0cmFjdERlZmF1bHRRSVRBcmdzIiwiZGF0YSIsIkV4dHJhY3REZWZhdWx0U291cmNlUUlUQXJncyIsIkV4dHJhY3REZWZhdWx0RGVzdGluYXRpb25RSVRBcmdzIiwiRGVmYXVsdE5vdGlmaWNhdGlvbkFyZ3MiLCJub3RpZmljYXRpb24iLCJHcmFwaFFMTGlzdCIsIk5vdGlmaWNhdGlvbklucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBTUE7O0FBVkE7Ozs7QUFZTyxJQUFNQSwwQ0FBaUI7QUFDNUJDLGVBQWE7QUFDWEMsVUFBTSxJQUFJQyx1QkFBSixDQUFtQkMsc0JBQW5CLENBREs7QUFFWEMsaUJBQWE7QUFGRixHQURlO0FBSzVCQyxpQkFBZTtBQUNiSixVQUFNLElBQUlDLHVCQUFKLENBQW1CQyxzQkFBbkIsQ0FETztBQUViQyxpQkFBYTtBQUZBO0FBTGEsQ0FBdkI7O0FBV0EsSUFBTUUsc0RBQXVCO0FBQ2xDQyxrQkFBZ0I7QUFDZE4sVUFBTSxJQUFJQyx1QkFBSixDQUFtQkMsc0JBQW5CLENBRFE7QUFFZEMsaUJBQWE7QUFGQyxHQURrQjtBQUtsQ0ksb0JBQWtCO0FBQ2hCUCxVQUFNLElBQUlDLHVCQUFKLENBQW1CQyxzQkFBbkIsQ0FEVTtBQUVoQkMsaUJBQWE7QUFGRztBQUxnQixDQUE3Qjs7QUFXQSxJQUFNSyxnRUFBNEI7QUFDdkNDLGtCQUFnQjtBQUNkVCxVQUFNLElBQUlDLHVCQUFKLENBQW1CQyxzQkFBbkIsQ0FEUTtBQUVkQyxpQkFBYTtBQUZDLEdBRHVCO0FBS3ZDTyxvQkFBa0I7QUFDaEJWLFVBQU0sSUFBSUMsdUJBQUosQ0FBbUJDLHNCQUFuQixDQURVO0FBRWhCQyxpQkFBYTtBQUZHO0FBTHFCLENBQWxDOztBQVdBLElBQU1RLHdEQUF3QixTQUF4QkEscUJBQXdCO0FBQUEsU0FBUztBQUM1Q1osaUJBQWFhLEtBQUtiLFdBRDBCO0FBRTVDSyxtQkFBZVEsS0FBS1I7QUFGd0IsR0FBVDtBQUFBLENBQTlCOztBQUtBLElBQU1TLG9FQUE4QixTQUE5QkEsMkJBQThCO0FBQUEsU0FBUztBQUNsRFAsb0JBQWdCTSxLQUFLTixjQUQ2QjtBQUVsREMsc0JBQWtCSyxLQUFLTDtBQUYyQixHQUFUO0FBQUEsQ0FBcEM7O0FBS0EsSUFBTU8sOEVBQW1DLFNBQW5DQSxnQ0FBbUM7QUFBQSxTQUFTO0FBQ3ZETCxvQkFBZ0JHLEtBQUtILGNBRGtDO0FBRXZEQyxzQkFBa0JFLEtBQUtGO0FBRmdDLEdBQVQ7QUFBQSxDQUF6Qzs7QUFLQSxJQUFNSyw0REFBMEI7QUFDckNDLGdCQUFjO0FBQ1poQixVQUFNLElBQUlpQixvQkFBSixDQUFnQkMsK0JBQWhCLENBRE07QUFFWmYsaUJBQWE7QUFGRDtBQUR1QixDQUFoQyIsImZpbGUiOiJRSVQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMzEvMDgvMTguXG4gKiBAZmxvd1xuICovXG5pbXBvcnQge1xuICBHcmFwaFFMU3RyaW5nLFxuICBHcmFwaFFMTGlzdCxcbiAgR3JhcGhRTE5vbk51bGwsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbnB1dCB9IGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRRSVRBcmdzID0ge1xuICByb3V0aW5nVHlwZToge1xuICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICBkZXNjcmlwdGlvbjogJ1JvdXRpbmcgVHlwZScsXG4gIH0sXG4gIHJvdXRpbmdOdW1iZXI6IHtcbiAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgZGVzY3JpcHRpb246ICdSb3V0aW5nIE51bWJlcicsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNvdXJjZVFJVEFyZ3MgPSB7XG4gIHNyY1JvdXRpbmdUeXBlOiB7XG4gICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIGRlc2NyaXB0aW9uOiAnU291cmNlIFJvdXRpbmcgVHlwZScsXG4gIH0sXG4gIHNyY1JvdXRpbmdOdW1iZXI6IHtcbiAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgZGVzY3JpcHRpb246ICdTb3VyY2UgUm91dGluZyBOdW1iZXInLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHREZXN0aW5hdGlvblFJVEFyZ3MgPSB7XG4gIGRzdFJvdXRpbmdUeXBlOiB7XG4gICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVzdGluYXRpb24gUm91dGluZyBUeXBlJyxcbiAgfSxcbiAgZHN0Um91dGluZ051bWJlcjoge1xuICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc3RpbmF0aW9uIFJvdXRpbmcgTnVtYmVyJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBFeHRyYWN0RGVmYXVsdFFJVEFyZ3MgPSBkYXRhID0+ICh7XG4gIHJvdXRpbmdUeXBlOiBkYXRhLnJvdXRpbmdUeXBlLFxuICByb3V0aW5nTnVtYmVyOiBkYXRhLnJvdXRpbmdOdW1iZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IEV4dHJhY3REZWZhdWx0U291cmNlUUlUQXJncyA9IGRhdGEgPT4gKHtcbiAgc3JjUm91dGluZ1R5cGU6IGRhdGEuc3JjUm91dGluZ1R5cGUsXG4gIHNyY1JvdXRpbmdOdW1iZXI6IGRhdGEuc3JjUm91dGluZ051bWJlcixcbn0pO1xuXG5leHBvcnQgY29uc3QgRXh0cmFjdERlZmF1bHREZXN0aW5hdGlvblFJVEFyZ3MgPSBkYXRhID0+ICh7XG4gIGRzdFJvdXRpbmdUeXBlOiBkYXRhLmRzdFJvdXRpbmdUeXBlLFxuICBkc3RSb3V0aW5nTnVtYmVyOiBkYXRhLmRzdFJvdXRpbmdOdW1iZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHROb3RpZmljYXRpb25BcmdzID0ge1xuICBub3RpZmljYXRpb246IHtcbiAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoTm90aWZpY2F0aW9uSW5wdXQpLFxuICAgIGRlc2NyaXB0aW9uOiAnTm90aWZpY2F0aW9ucycsXG4gIH0sXG59O1xuIl19