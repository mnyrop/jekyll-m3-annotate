import mirador from 'mirador/dist/es/src/index';
import annotationPlugins from 'mirador-annotations';
import annototAdapter from 'mirador-annotations/es/AnnototAdapter';
import localStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const manifest = urlParams.get('manifest')

 const config = {
   id: 'mirador-container',
   annotation: {
     adapter: (canvasId) => new localStorageAdapter(`localStorage://?canvasId=${canvasId}`),
     // adapter: (canvasId) => new annototAdapter(canvasId, 'http://localhost:8888/'),
   },
   window: {
     allowClose: false,
     allowMaximize:  true,
     defaultSideBarPanel: 'annotations',
     sideBarOpenByDefault: true,
     defaultView: 'book'
   },
   workspace: {
     type: 'mosaic',
   },
   thumbnailNavigation: {
     defaultPosition: 'off'
   },
   workspaceControlPanel: {
     enabled: false,
   },
   windows: [{
     loadedManifest: manifest,
   }],
 };

 mirador.viewer(config, [
   ...annotationPlugins,
 ]);

window.mirador = mirador;
