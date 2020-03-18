import React from 'react'

export default class Newarticle extends React.Component {
    render() {
        return (
            <div className="container">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">What's this article about</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" />
                    </div>
                    <div class="field">
                        <label class="label">Write your article</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Tags</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
