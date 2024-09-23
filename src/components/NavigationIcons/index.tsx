import * as S from './style'

import GitHubNavIconSVG from "../../assets/arrowUpRightIcon.svg";
export function NavigationIcons(){
    return(
        <S.NavigationWeb>

            <p>Git Hub</p>
            <a href="https://github.com/gustavobreack3257" target="_blank">
              <img src={GitHubNavIconSVG} />
            </a>
          </S.NavigationWeb>
    )
}