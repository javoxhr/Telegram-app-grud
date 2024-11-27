import axios from "axios";
import baseUrl from "./baseUrl";
import { useStore } from "../store/store";

export default async function server(
    endPoint = "",
    method = "get",
    data = null
) {
    const store = useStore();
    let result, error;

    await axios
        .request({
            baseURL: baseUrl + endPoint,
            method: method,
            data: data,
        })
        .then((res) => {
            result = res;
        })
        .catch((err) => {
            error = err;
        });

    return new Promise((resolve, reject) => {
        if (result) {
            resolve(result);
        } else {
            reject(error);
        }
    });
}
