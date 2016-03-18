import $ from 'jquery';
const CartAPI = {
  tiles: [],
  cartItems: [],
  availableCharts: [],
  addTile(tile) {
    var _this = this;
    this.tiles.push({
      'id': 'Tile' + (_this.tiles.length + 1),
      'title': 'Tile #' + (_this.tiles.length + 1),
      'query': 'A great Tile',
      'chart': 'Lorem ipsum dolor sit amet.'
    })
  },
  removeTile(tile){
    this.tiles.splice(this.tiles.findIndex(i => i === tile), 1);
  },
  setQueryResult(tile) {
    var _this = this;
    console.log(tile);
    for (let i = 0; i < _this.tiles.length; i++) {
      if (tile.id === _this.tiles[i].id) {
        if(tile.queryError!==''){
          _this.tiles[i].queryError = tile.queryError;
          _this.tiles[i].queryResult = [];
        }else{
          _this.tiles[i].queryError = '';
          _this.tiles[i].queryResult = tile.queryResult;
        }
      }
    }
  },

  saveConfog() {

  },

  changeQuery(item) {
    for (let i = 0; i < this.tiles.length; i++) {
      if (item.tile.id === this.tiles[i].id) {
        console.log(item.tile);
        this.tiles[i].query = item.query;
      }
    }
  },

  getTiles() {
    return this.tiles;
  },

  getCharts() {
    return this.availableCharts;
  },

  init() {
    for (let i = 1; i < 9; i++) {
      this.tiles.push({
        'id': 'Tile' + i,
        'title': 'Tile #' + i,
        'query': '',
        'chart': 'Lorem ipsum dolor sit amet.',
        'queryResult': [],
        'queryError': ''
      });
    }
  }
}

CartAPI.init();
export default CartAPI;
