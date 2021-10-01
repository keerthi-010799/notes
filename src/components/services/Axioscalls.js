import axios from "axios";

const Api = `https://mynotes-37d42-default-rtdb.firebaseio.com/notes`;
export async function postdata(data){
      const result = await axios.post(`${Api}.json`,data);
      return result;
}
export async function putdata(id,data){
      const result = await axios.put( `${Api}/${id}.json`,data);
      return result;
}
export async function deletedata(id){
      const result = await axios.delete( `${Api}/${id}.json`);
      return result;
}
export async function getdata (){
      const response = await axios.get(`${Api}.json`);
      return response;
}
export async function binData(data){
      const result = await axios.post(`https://mynotes-37d42-default-rtdb.firebaseio.com/deletedNotes.json`,data);
      return result;
}
export async function getBindata (){
      const response = await axios.get(`https://mynotes-37d42-default-rtdb.firebaseio.com/deletedNotes.json`);
      return response;
}