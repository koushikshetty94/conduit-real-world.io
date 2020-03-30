import React, { useRef } from 'react'


export default function Newarticle() {

    let title = useRef(null);
    let description = useRef(null);
    let body = useRef(null);
    let tags = useRef(null);

    const addNewArticle = (e) => {
        e.preventDefault();
        fetch("https://conduit.productionready.io/api/articles", 
        { method: "POST",
          headers: {
              "Content-Type" : "application/json",
              authorization: `Token ${localStorage["conduit-token"]}`

          },
          body: JSON.stringify({
            article: {title: title.current.value, description: description.current.value, body: body.current.value, tagList: [tags.current.value]}
          })
          }).then(res => res.json()).then(article => window.location.href="/")
    
    }
    
    return (
        <div className="container">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" ref={title} />
                </div>
            </div>
            <div class="field">
                <label class="label">What's this article about</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" ref={description} />
                </div>
                <div class="field">
                    <label class="label">Write your article</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" ref={body} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Tags</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" ref={tags} />
                    </div>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button onClick={(e) => addNewArticle(e)} class="button is-link">Submit</button>
                </div>
            </div>
        </div>
    )

}
