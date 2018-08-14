/**
 * Created by guoyan on 2018/6/21.
 */
import axios from 'axios'
import apiConfig from './apiConfig'
export default {
  getDataForBar (params, options) {
    let url = '/apis/static/myData.json'
    const configs = {apiConfig, url, data: params, ...options}
    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getDataForLine (params, options) {
    let url = '/apis/static/myData.json'
    const configs = {apiConfig, url, data: params, ...options}
    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
