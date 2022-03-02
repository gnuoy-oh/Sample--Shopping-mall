const path = require('path');

module.exports = {
    devServer: {
        client: {
            overlay: false
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "src/"),
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/assets/main.scss";
        `
            }
        }
    }
}
