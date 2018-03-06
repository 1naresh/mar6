var path=require('path')
var webpack=require('webpack');
module.exports={
    context:path.resolve(__dirname,"src/js"),
    entry:'./app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/dist'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test: /\.html$/,  use: ["html-loader"] },
            // {test: /\.(jpg|png|svg)$/,use: {loader: "url-loader",options:{limit: 25000,},},},
            {test: /\.(jpg|png|svg)$/,loader: "file-loader"}
        ]
    }
}