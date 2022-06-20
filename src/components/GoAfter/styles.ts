import styled from "@emotion/styled";

export const GoAfterSchool = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;

    .flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
    }


    .social-btn {
	cursor: pointer;
	height: 50px;
	width: 50px;
    color: white;
	border-radius: 30px;
	background: #ED6666;
	margin: 5px;
	transition: 0.5s;
    }

    .social-btn span {
    display: none;
	overflow: hidden;
	transition: 0.5s;
	text-align: center;
    }

    .social-btn:hover {
	width: 150px;
	border-radius: 30px;
    }

    .social-btn:hover span {
    animation: animate 5s;
    display: inline-block;
    margin-left: 40px;
    width: max-content;
    white-space: nowrap;
    }
`