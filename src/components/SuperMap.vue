<template>
  <h2>SuperMap</h2>
  <sm-web-map :map-options="mapOptions"></sm-web-map>
  
</template>

<script>
  export default {
    setup() {
      // return {
      //   mapOptions: {
      //     container: 'ma p', // container id
      //     style: {
      //       version: 8,
      //       sources: {
      //         'raster-tiles': {
      //           type: 'raster',
      //           tiles: [
      //             'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
      //           ],
      //           tileSize: 256
      //         }
      //       },
      //       layers: [
      //         {
      //           id: 'simple-tiles',
      //           type: 'raster',
      //           source: 'raster-tiles',
      //           minzoom: 0,
      //           maxzoom: 22
      //         }
      //       ]
      //     },
      //     center: [120.143, 30.236], // starting position
      //     zoom: 3 // starting zoom
      //   }
      // }
    }
  }
</script>

<style></style>
