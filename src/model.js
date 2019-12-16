import products from './data';

export default function DataModel(){
  const data = [...products];

  this.getAll = () => data;
  this.findById = (id)=>data[id];
}