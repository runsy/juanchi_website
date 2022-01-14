import React, {useReducer, useEffect, useCallback, useRef} from 'react'

const commentReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            // Update the comments with the new payload
            return {...state, "showComments": false, "comments": action.payload }
        case 'COMMENTS_LOADED':
            // Update the comments with the new payload
            return {...state, "showComments": true, "comments": state.comments}
		case 'ADD_COMMENT':
			const new_comment = {_id : "", Idea_ID : "", Text: action.payload, Creation_Date: "now" };
			return {...state, "showComments": true, "comments": [new_comment, ...state.comments]};
			//return {...state, "showComments": true, "comments": newMessages};
            // Return the updated state
        default:
            throw new Error();
    }
}

type CommentProps = {
	path: string;
	main: boolean;
};

const Comments = (props: CommentProps) => {

	const [state, dispatch] = useReducer(commentReducer, {
		"showComments": false,
		"comments": []
	});

	const FetchComments = useCallback(() => {
		fetch(props.path)
			.then(res => res.json())
			.then(data => dispatch({type: "FETCH_SUCCESS", payload:data}));
	}, [props.path]);

	const Update = useRef(true);

	useEffect(() => {
		if (Update.current) {
			console.log("Comments loaded.");
			FetchComments();
		}
	}, [FetchComments])

    const handleKeyDown = (event) => {
        // Press enter key
        if (event.keyCode === 13) {
			event.preventDefault();
			Update.current = false;
			const comment_text = event.currentTarget.value;
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ Text: comment_text })
			};
			fetch(props.path, requestOptions)
				.then(response => response.json());
			dispatch({type: "ADD_COMMENT", payload: comment_text});
			event.currentTarget.value = "";
			console.log("Comment added.");
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
				<ul class= "comment">
					{state.comments.map((commentItem) => (
						<li key = {commentItem._id}>
							<hr/>
							<div class = "comment-text">
								{commentItem.Text}
							</div>
							<div class = "comment-date">
								{commentItem.Creation_Date}
							</div>
						</li>
					))}
                </ul>
			</div>
        )
    }
}

export default Comments;
