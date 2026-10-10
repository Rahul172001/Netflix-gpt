import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        newMovie : null,
        mainMovieVideo : null,
        mainMovie : null,
        popularMovie : null,
        topRatedMovie: null,
        upComingMovie: null
    },
    reducers:{
        addNewMovies :(state,actions)=>{
            state.newMovie = actions.payload
        },
        movieTrailer :(state,actions)=>{
            state.mainMovieVideo = actions.payload
        },
        selectMainMovie :(state,actions)=>{
            state.mainMovie = actions.payload
        },
        addPopularMovies :(state,actions)=>{
            state.popularMovie = actions.payload
        },
        addTopRatedMovies :(state,actions)=>{
            state.topRatedMovie = actions.payload
        },
        addUpComingMovies :(state,actions)=>{
            state.upComingMovie = actions.payload
        }
        
            
    }
})

export const {addNewMovies,movieTrailer,selectMainMovie,addPopularMovies,addTopRatedMovies,addUpComingMovies} = MovieSlice.actions
export default MovieSlice.reducer