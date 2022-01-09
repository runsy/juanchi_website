import React, {useReducer, useEffect, useCallback} from 'react'

const commentReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            // Update the comments with the new payload
            return { "showComments": false, "path": state.path, "comments": action.payload }
        case 'COMMENTS_LOADED':
            // Update the comments with the new payload
            return { "showComments": true, "path": state.path, "comments": state.comments}
		case 'ADD_COMMENT':
		    const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ Text: action.payload })
			};
			fetch(state.path, requestOptions)
				.then(response => response.json())
				.then(data => data.id);
			state.comments.unshift({ Text: action.payload })
            // Return the updated state
            return { "showComments": true, "path": state.path, "comments": state.comments }
        default:
            throw new Error();
    }
}

//const initialComments = [{ Idea_ID: 1, Text: "This is the first comment" }, { Idea_ID: 2, Text: "This is the second comment" }]

type CommentProps = {
	path: string;
	main: boolean;
};

const Comments = (props: CommentProps) => {


	const FetchComments = useCallback(() => {
		fetch(props.path)
			.then(res => res.json())
			.then(data => dispatch({type: "FETCH_SUCCESS", payload:data}));
	}, [props.path]);

	useEffect(() => {
		FetchComments()
	}, [FetchComments])

	const [state, dispatch] = useReducer(commentReducer,{
			"showComments": false,
			"path": props.path,
			"comments": []
		});

    const handleKeyDown = (event) => {
        // Press enter key
        if (event.keyCode === 13) {
			event.preventDefault();
			dispatch({type: "ADD_COMMENT", payload:event.currentTarget.value});
			event.currentTarget.value = "";
        }
    };

    if (!props.main && !state.showComments) {
        return (
            <button className="button" onClick={() => dispatch({type: "COMMENTS_LOADED"})}>Cargar comentarios</button>
        )
    } else {
        return(
			<div>
				<h1>Comentarios</h1>
				<div className="comment__new">
					<input id="comment-new-input" maxlength="50" type="text" placeholder="Tu comentario y ENTER" onKeyDown={handleKeyDown} />
				</div>
                {state.comments.map((commentItem) => (
                    <div class = "comment" key = {commentItem.Comment_ID}>
						<hr/>
                        <div class = "comment-text">
							{commentItem.Text}
						</div>
						<div class = "comment-date">
							{Date(commentItem.Creation_Date)}
						</div>
                    </div>
                ))}
			</div>
        )
    }
}

export default Comments;
