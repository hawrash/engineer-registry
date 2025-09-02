const React = require('react')

function Edit (props) {
    const { name, _id, available, specialty } = props.engineer

    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <form action={`/engineers/${_id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={name}
                    title="Enter engineer's name"
                    placeholder="Engineer Name"
                /><br/>
                <label htmlFor="specialty">Specialty:</label>
                <input
                    type="text"
                    id="specialty"
                    name="color"
                    defaultValue={specialty}
                    title="Enter engineer's specialty"
                    placeholder="Specialty"
                /><br/>
                <label htmlFor="available">Available:</label>
                {available ? (
                    <input
                        type="checkbox"
                        id="available"
                        name="available"
                        defaultChecked
                        title="Is engineer available?"
                    />
                ) : (
                    <input
                        type="checkbox"
                        id="available"
                        name="available"
                        title="Is engineer available?"
                    />
                )}<br/>
                <input type="submit" value="Update record" />
            </form>
        </div>
    )
}

module.exports = Edit