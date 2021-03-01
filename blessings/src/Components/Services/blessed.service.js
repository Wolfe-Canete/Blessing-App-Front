import http from "../../http-common.jsx";
const host = "https://nameless-citadel-52825.herokuapp.com/blessings"

const getAll = () => {
  return http.get(`${host}/`);
};

const get = id => {
  return http.get(`${host}/${id}`);
};

const create = data => {
  return http.post(`${host}`, data);
};

const update = (id, data) => {
  return http.put(`${host}/${id}`, data);
};

const remove = id => {
  return http.delete(`${host}/${id}`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove
};