import React, { MouseEvent, useEffect, useState } from "react";
import * as S from "./style";
import { list } from "./dummyData";
import * as Type from "../../types/AfterSchoolType";
import * as SVG from "../../SVG";

export default function NomalAfterSchool() {
  return (
    <S.AfterSchool>
      <S.Search>
        <S.Input
          type="text"
          name="search"
          placeholder="검색어를 입력하세요."
          autoComplete="off"
        />
        <i>
          <SVG.SearchIcon />
        </i>
        <i>
          <SVG.SearchFilter />
        </i>
      </S.Search>
      {true && (
        <S.FilterBox>
          <S.FilterList>
            <p>요일</p>
            <S.FilterElement>월요일</S.FilterElement>
          </S.FilterList>
          <S.FilterList>
            <p>대상학년</p>
            <S.FilterElement>1학년</S.FilterElement>
          </S.FilterList>
        </S.FilterBox>
      )}
      <S.AfterSchoolBox filter={``}>
        <S.CurseList>
          <span>강좌</span>
          <span>강의시간</span>
          <span>대상학년</span>
        </S.CurseList>
        <S.NotFilter>
          <SVG.Whale />
          <p>
            검색이나 필터를 사용해서
            <br />
            방과후를 검색해주세요.
          </p>
        </S.NotFilter>
        <>
          <S.ScollBox>
            <S.Enrolment>
              <div>
                <p>어쩌고</p>
                <p>월</p>
                <p>1학년</p>
              </div>
            </S.Enrolment>
          </S.ScollBox>
        </>
      </S.AfterSchoolBox>
    </S.AfterSchool>
  );
}
