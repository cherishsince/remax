'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var regeneratorRuntime = _interopDefault(require('regenerator-runtime'));
var wechat = require('../wechat-chunk.js');

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

var View = createHostComponent('view');

createHostComponent('input');

createHostComponent('textarea');

createHostComponent('video');

createHostComponent('swiper');

createHostComponent('scroll-view');

createHostComponent('swiper-item');

createHostComponent('icon');

var Text = createHostComponent('text');

createHostComponent('rich-text');

createHostComponent('progress');

createHostComponent('button');

createHostComponent('checkbox-group');

createHostComponent('checkbox');

createHostComponent('form');

createHostComponent('label');

createHostComponent('picker');

createHostComponent('picker-view');

createHostComponent('picker-view-column');

createHostComponent('radio-group');

createHostComponent('radio');

createHostComponent('slider');

createHostComponent('switch');

createHostComponent('navigator');

var Image = createHostComponent('image');

createHostComponent('canvas');

createHostComponent('web-view');

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$1(__assign$1({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

var getAppStub = getApp;
var canIUse = tt.canIUse;
var getSystemInfoSync = tt.getSystemInfoSync;
var getSystemInfo = promisify(tt.getSystemInfo);
var getUpdateManager = tt.getUpdateManager;
var getLaunchOptionsSync = tt.getLaunchOptionsSync;
var exitMiniProgram = tt.exitMiniProgram;
var switchTab = promisify(tt.switchTab);
var reLaunch = promisify(tt.reLaunch);
var redirectTo = promisify(tt.redirectTo);
var navigateTo = promisify(tt.navigateTo);
var navigateBack = promisify(tt.navigateBack);
var showToast = promisify(tt.showToast);
var showModal = promisify(tt.showModal);
var showLoading = promisify(tt.showLoading);
var showActionSheet = promisify(tt.showActionSheet);
var hideToast = promisify(tt.hideToast);
var hideLoading = promisify(tt.hideLoading);
var setNavigationBarTitle = tt.setNavigationBarTitle;
var stopPullDownRefresh = tt.stopPullDownRefresh;
var startPullDownRefresh = tt.startPullDownRefresh;
var pageScrollTo = promisify(tt.pageScrollTo);
var createAnimation = tt.createAnimation;
var request = promisify(tt.request);
var downloadFile = promisify(tt.downloadFile);
var uploadFile = promisify(tt.uploadFile);
var connectSocket = tt.connectSocket;
var setStorageSync = tt.setStorageSync;
var setStorage = promisify(tt.setStorage);
var removeStorageSync = tt.removeStorageSync;
var removeStorage = promisify(tt.removeStorage);
var getStorageSync = tt.getStorageSync;
var getStorageInfoSync = tt.getStorageInfoSync;
var getStorageInfo = promisify(tt.getStorageInfo);
var getStorage = promisify(tt.getStorage);
var clearStorageSync = tt.clearStorageSync;
var clearStorage = promisify(tt.clearStorage);
var saveImageToPhotosAlbum = promisify(tt.saveImageToPhotosAlbum);
var previewImage = promisify(tt.previewImage);
var getImageInfo = promisify(tt.getImageInfo);
var chooseImage = promisify(tt.chooseImage);
var saveVideoToPhotosAlbum = promisify(tt.saveVideoToPhotosAlbum);
var createVideoContext = tt.createVideoContext;
var chooseVideo = promisify(tt.chooseVideo);
var openLocation = promisify(tt.openLocation);
var getLocation = promisify(tt.getLocation);
var showShareMenu = promisify(tt.showShareMenu);
var hideShareMenu = promisify(tt.hideShareMenu);
var navigateToVideoView = promisify(tt.navigateToVideoView);
var createCanvasContext = tt.createCanvasContext;
var saveFile = promisify(tt.saveFile);
var removeSavedFile = promisify(tt.removeSavedFile);
var openDocument = promisify(tt.openDocument);
var getSavedFileList = tt.getSavedFileList;
var getFileSystemManager = tt.getFileSystemManager;
var getFileInfo = tt.getFileInfo;
var login = promisify(tt.login);
var checkSession = tt.checkSession;
var navigateToMiniProgram = tt.navigateToMiniProgram;
var navigateBackMiniProgram = promisify(tt.navigateBackMiniProgram);
var getUserInfo = promisify(tt.getUserInfo);
var reportAnalytics = tt.reportAnalytics;
var requestPayment = promisify(tt.requestPayment);
var pay = promisify(tt.pay);
var authorize = promisify(tt.authorize);
var openSetting = promisify(tt.openSetting);
var getSetting = promisify(tt.getSetting);
var chooseAddress = promisify(tt.chooseAddress);
var setClipboardData = promisify(tt.setClipboardData);
var getClipboardData = tt.getClipboardData;
var onNetworkStatusChange = tt.onNetworkStatusChange;
var getNetworkType = promisify(tt.getNetworkType);
var makePhoneCall = promisify(tt.makePhoneCall);
var stopAccelerometer = promisify(tt.stopAccelerometer);
var startAccelerometer = promisify(tt.startAccelerometer);
var onAccelerometerChange = tt.onAccelerometerChange;
var stopCompass = promisify(tt.stopCompass);
var startCompass = promisify(tt.startCompass);
var onCompassChange = tt.onCompassChange;
var scanCode = promisify(tt.scanCode);
var vibrateShort = promisify(tt.vibrateShort);
var vibrateLong = promisify(tt.vibrateLong);
var getExtConfigSync = tt.getExtConfigSync;
var getExtConfig = promisify(tt.getExtConfig);
var createSelectorQuery = tt.createSelectorQuery;
var createIntersectionObserver = tt.createIntersectionObserver;
var createRewardedVideoAd = tt.createRewardedVideoAd;
var getConnectedWifi = promisify(tt.getConnectedWifi);
var setKeepScreenOn = promisify(tt.setKeepScreenOn);
var getMenuButtonLayout = tt.getMenuButtonLayout;

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement( /*#__PURE__*/React.createElement(Text, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = index$1._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, /*#__PURE__*/React.createElement(wechat.FunctionalPageNavigator, null), /*#__PURE__*/React.createElement(UnBindingComponent, null));
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
