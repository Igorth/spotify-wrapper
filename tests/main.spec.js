import { expect } from 'chai';
import { search, searchAlbuns, searchTracks, searchPlaylists, searchArtists } from '../src/main';

describe('Spotify Wrapper', () => {

  describe('Smoke tests', () => {
    // search generico -> + mais de 1 tipo;
    // search albuns;
    // search tracks;
    // search artists;
    // search playlists;
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    it('should exist the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

});
