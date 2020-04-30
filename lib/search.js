"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchArtists = exports.searchTracks = exports.searchAlbums = exports.search = void 0;

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var search = function search(query, type) {
  fetch("".concat(_config["default"], "/search?q=").concat(query, "&type=").concat(type)).then(_utils["default"]);
};

exports.search = search;

var searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;