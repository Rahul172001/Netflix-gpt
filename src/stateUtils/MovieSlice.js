import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        newMovie : null,
        mainMovieVideo : null,
        popularMovie : null,
        topRatedMovie: null
    },
    reducers:{
        addNewMovies:(state,actions)=>{
            state.newMovie = actions.payload
        },
        movieTrailer :(state,actions)=>{
            state.mainMovieVideo = actions.payload
        },
        addPopularMovie:(state,actions)=>{
            state.popularMovie = actions.payload
        },
        addTopRatedMovie:(state,actions)=>{
            state.topRatedMovie = actions.payload
        }
        
            
    }
})

export const {addNewMovies,movieTrailer,addPopularMovie,addTopRatedMovie} = MovieSlice.actions
export default MovieSlice.reducer