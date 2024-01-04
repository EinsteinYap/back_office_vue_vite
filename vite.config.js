import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server:{   
    port:3000, 
    proxy:{
      "/api": {
        ws: true,
        changeOrigin: true,
        target: "http://ceshi13.dishait.cn",
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  // devServer:{    
  //   port: 3000,
  //   proxy:{
  //     "/api": {
  //       ws: true,
  //       changeOrigin: true,
  //       target: "http://ceshi13.dishait.cn/",
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, "")
  //     }
  //   }
  // },
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },
  plugins: [vue(),WindiCSS()],
})
