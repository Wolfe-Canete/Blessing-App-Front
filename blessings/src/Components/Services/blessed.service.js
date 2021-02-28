import http from "../../http-common.jsx";

const getAll = () => {
  return http.get("/blessings");
};

const get = id => {
  return http.get(`/blessings/${id}`);
};

const create = data => {
  return http.post("/blessings", data);
};

const update = (id, data) => {
  return http.put(`/blessings/${id}`, data);
};

const remove = id => {
  return http.delete(`/blessings/${id}`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove
};