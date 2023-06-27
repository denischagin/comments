import { createSlice } from "@reduxjs/toolkit";
import { dataComments } from "../../data/dataComments";
import { dataFavorites } from './../../data/dataFavorites';


const initialState = {
    comments: dataComments,
    favoritesList: dataFavorites

}

const commentsSlices = createSlice({
    initialState,
    name: 'comments',
    reducers: {
        addComment(state, action) {
            state.comments.push(action.payload)
        },

        removeComment(state, action) {
            state.comments =state.comments.filter((comment) => {
                comment.commentsReply = comment.commentsReply.filter((com) => com.id !== action.payload)
                return comment.id !== action.payload
            })
        },

        incrementLike (state, action) {
            state.comments.forEach((comment) => {
                if (comment.id === action.payload) return comment.likes += 1;

                comment.commentsReply.forEach((com) => {
                    if (com.id === action.payload) return com.likes += 1;
                })
            })
        },

        decrementLike (state, action) {
            state.comments.forEach((comment) => {
                if (comment.id === action.payload) return comment.likes -= 1;

                comment.commentsReply.forEach((com) => {
                    if (com.id === action.payload) return com.likes -= 1;
                })
            })
        },

        inFavorites (state, action) {
            state.comments.forEach((comment) => {
                if (comment.id === action.payload) {
                    state.favoritesList.push(comment)
                    return comment.inFavorites = !comment.inFavorites
                };

                comment.commentsReply.forEach((com) => {
                    if (com.id === action.payload) {
                        state.favoritesList.push(comment)
                        return com.inFavorites = !com.inFavorites
                    };
                })
            })
        },

        addReply (state, action) {
            state.comments.forEach((comment) => {
                if (comment.id === action.payload.commentId) return comment.commentsReply.push(action.payload.newReply);
            })
        },

        sortedCommentsBy(state, action) {
            switch (action.payload) {
                case "like/ASC" :
                    state.comments.sort((a, b) => a.likes - b.likes)
                    break;
                case "like/DESC":
                    state.comments.sort((a, b) => b.likes - a.likes)
                    break;
                case "date/ASC" :
                    state.comments.sort((a, b) => b.time - a.time)
                    break;
                case "date/DESC":
                    state.comments.sort((a, b) => a.time - b.time)
                    break;
            }
        }

    }
})

export default commentsSlices.reducer;
export const {
    addComment, 
    removeComment, 
    incrementLike, 
    decrementLike, 
    inFavorites, 
    addReply,
    sortedCommentsBy
} = commentsSlices.actions;