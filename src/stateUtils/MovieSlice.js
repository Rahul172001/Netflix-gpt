import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        newMovie : null,
        mainMovieVideo : null
    },
    reducers:{
        addNewMovies:(state,actions)=>{
            state.newMovie = actions.payload
        },
        movieTrailer :(state,actions)=>{
            state.mainMovieVideo = actions.payload
        }
        
            
    }
})

export const {addNewMovies,movieTrailer} = MovieSlice.actions
export default MovieSlice.reducer