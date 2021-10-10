import client from "./client";
import Vue from "vue";

const api = {
        users: {
            list() {
                return client.get(
                    `:8088/api/usuarios`
                );
            },
            delete(id){
                client.delete(
                    `:8088/api/usuario/${id}/delete`
                );
            }
        }

};

export default api;
