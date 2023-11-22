import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // remove after finished developing
    // token: "BQCpQFZgJYa7Zj6c3gptSWe7Dv1FuLK4azChk7PFs8aLzBO7ksGM00Jqcl96T2FUuL36Zjt-f9ytcKNNmoiuJVsJgZv2P4zgRRENk3jkltxwsp-AnzuJwX8pM5U3jSdNG91bGDFCbN9I5GTksm5OqqLD8yTv8ZuedYDyOwQ8YWhaS6VR_prjrHpw0Bsu2_PeXM_sgddsJPV4q6C2"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;