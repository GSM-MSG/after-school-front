import { LeftArrow } from "../../SVG";
import * as S from "./styles";

export function GoAfter() {
    return (
        <S.GoAfterSchool>
            <div className="social-btn flex-center" id="github">
                <LeftArrow />
                <span>방과후</span>
            </div>
        </S.GoAfterSchool>
    )
}