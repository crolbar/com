use yew::prelude::*;

#[function_component]
fn App() -> Html {
    html! {
        <div class="m">
            <h1 style="color: #220000">{"forever in progress"}</h1>
            <a href="https://crolbar.com">
                <img class="crol-ico" src="../imgs/favicon.ico"/>
            </a>
            <a href="https://github.com/crolbar">
                <img class="git-ico" src="../imgs/github.png"/>
            </a>
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
