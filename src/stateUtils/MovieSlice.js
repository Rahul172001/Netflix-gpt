import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        newMovie : null,
        mainMovieVideo : null,
        popularMovie : null
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
        }
        
            
    }
})

export const {addNewMovies,movieTrailer,addPopularMovie} = MovieSlice.actions
export default MovieSlice.reducer