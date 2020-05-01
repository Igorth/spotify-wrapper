/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumsTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoked tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumsTracks).to.exist;
    });
  });

  describe('Get Album', () => {
    it('should call fetched method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    // it('should return the correct data from Promise', () => {
    //   const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
    //   album.then((data) => {
    //     expect(data).to.be.eql({ album: 'name' });
    //   });
    // });
  });

  describe('Get Albums', () => {
    it('should call fetched method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo');
    });

    it('should return the correct data from Promise', () => {
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('Get Albums Tracks', () => {
    it('should call fetched method', () => {
      const tracks = getAlbumsTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    // it('should return the correct data from Promise', () => {
    //   const tracks = getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy');
    //   traciks.then((data) => {
    //     expect(data).to.be.eql({ album: 'name' });
    //   });
    // });
  });
});
