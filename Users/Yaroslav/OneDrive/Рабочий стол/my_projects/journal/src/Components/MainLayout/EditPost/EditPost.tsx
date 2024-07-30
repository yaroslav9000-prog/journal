import "./EditPost.css";

function EditPost(): JSX.Element {
    return (
        <div className="EditPost">
			<form action="">
                <label htmlFor="title"></label><br />
                <input type="text" id="title"/><br />
                <label htmlFor="text">Title</label><br />
                <textarea rows={4} id="text"/><br />
            </form>
        </div>
    );
}

export default EditPost;
