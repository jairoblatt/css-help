import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Load store modules dynamically.

export const state = {
//     BOX SHADOW     
    fade: 10,
    spread:10,
    axisY:10,
    axisX:10,
    color:'#00000',
    inset:false,
//     BORDER RADIUS
    top:0,
    left:0,
    bottom:0,
    right:0,
    all:0,
    style:'solid',
    size: 0,
//     TRANSFORM
    scale:0,
    rotate:0,
    translateX:0,
    translateY:0,
    skewX:0,
    skewY:0
}

export const getters = {
//     BOX SHADOW     
        fade: state => state.fade,
        inset: state => state.inset,
        color: state => state.color,
        axisY: state => state.axisY,
        axisX: state => state.axisX,
        spread:state => state.spread,
//     BORDER RADIUS
        all:state => state.all,
        top:state => state.top,
        left:state => state.left,
        bottom:state => state.bottom,
        right:state => state.right,
        style:state => state.style,
        size:state => state.size,
//     TRANSFORM
        scale:state => state.scale,
        rotate:state => state.rotate,
        translateX:state => state.translateX,
        translateY:state => state.translateY,
        skewX:state => state.skewX,
        skewY:state => state.skewY,
}

export const mutations = {
//     BOX SHADOW     
        fade(state, payload){
                state.fade = payload
        },

        inset(state, payload){
                state.inset = payload
        },
        
        spread(state, payload){
                state.spread = payload
        },
        axisY(state, payload){
                state.axisY = payload
        },
        axisX(state, payload){
                state.axisX = payload
        },
        color(state, payload){
                state.color = payload
        },
//     BORDER RADIUS
        all(state, payload){
           state.all = payload; 
        },
        style(state, payload){
                state.style = payload.toLowerCase();
        },
        size(state, payload){
                state.size = payload;
        },
        top(state, payload){
                state.top = payload;
        },
        left(state, payload){
                state.left = payload;
        },
        bottom(state, payload){
                state.bottom = payload;
        },
        right(state, payload){
                state.right = payload;
        },
//     TRANSFORM
        scale(state, payload){
                state.scale = payload;
        },
        rotate(state, payload){
                state.rotate = payload;
        },
        translateX(state, payload){
                state.translateX = payload;
        },
        translateY(state, payload){
                state.translateY = payload;
        },
        skewX(state, payload){
                state.skewX = payload;
        },
        skewY(state, payload){
                state.skewY = payload;
        },
}

export default new Vuex.Store({
        getters,
        state,
        mutations
})