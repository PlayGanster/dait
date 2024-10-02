import "@styles/pages/head/head-test.scss"
import EYE1_IMG from "@assets/img/head/eyes/eye1.png"
import EYE2_IMG from "@assets/img/head/eyes/eye2.png"
import NOSE1_IMG from "@assets/img/head/nose/nose1.png"
import NOSE2_IMG from "@assets/img/head/nose/nose2.png"
import FACE1_IMG from "@assets/img/head/face/face1.png"
import FACE2_IMG from "@assets/img/head/face/face2.png"
import MOUSE1_IMG from "@assets/img/head/mouse/mouse1.png"
import MOUSE2_IMG from "@assets/img/head/mouse/mouse2.png"
import BROW1_IMG from "@assets/img/head/brow/brow1.png"
import VOLOS1_IMG from "@assets/img/head/volos/volos1.png"
import VOLOS2_IMG from "@assets/img/head/volos/volos2.png"
import { useState } from "react"

const HeadContent = () => {
    const [face, setFace] = useState({img: FACE1_IMG, id: 1})
    const [nose, setNose] = useState({img: NOSE1_IMG, id: 1})
    const [eye_left, setEye_left] = useState({img: EYE1_IMG, id: 1})
    const [eye_right, setEye_right] = useState({img: EYE1_IMG, id: 1})
    const [brow_left, setBrow_left] = useState({img: BROW1_IMG, id: 1})
    const [brow_right, setBrow_right] = useState({img: BROW1_IMG, id: 1})
    const [mouse, setMouse] = useState({img: MOUSE1_IMG, id: 1})
    const [volos, setVolos] = useState({img: VOLOS1_IMG, id: 1})

    function renderVolos() {
        if(volos.id === 1){
            return (
                <div style={{width: 100, height: 70, backgroundImage: "url("+volos.img+")", position: "absolute", left: 7.5, top:-20, zIndex: 99, backgroundSize: "cover"}}></div>
            );
        }else {
            return (
                <div style={{width: 180, height: 100, backgroundImage: "url("+volos.img+")", position: "absolute", left:-35, top:-60, zIndex: 99, backgroundSize: "cover"}}></div>
            );
        }
    }

    function renderBrowLeft() {
        if(face.id === 1){
            return (
                <div style={{width: 40, height: 20, backgroundImage: "url("+brow_left.img+")", position: "absolute", left:15, top:25, zIndex: 99, backgroundSize: "cover"}}></div>
            );
        }
        return (
            <div style={{width: 40, height: 20, backgroundImage: "url("+brow_left.img+")", position: "absolute", left:15, top:25, zIndex: 99, backgroundSize: "cover"}}></div>
        );
    }

    function renderBrowRight() {
        if(face.id === 1){
            return (
                <div style={{width: 40, height: 20, backgroundImage: "url("+brow_right.img+")", position: "absolute", right:0, top:25, zIndex: 99, backgroundSize: "cover", transform: "scaleX(-1)"}}></div>
            );
        }
        return (
            <div style={{width: 40, height: 20, backgroundImage: "url("+brow_right.img+")", position: "absolute", right:0, top:25, zIndex: 99, backgroundSize: "cover", transform: "scaleX(-1)"}}></div>
        );
    }

    function renderEyeLeft() {
        if(face.id === 1){
            return (
                <div style={{width: 30, height: 15, backgroundImage: "url("+eye_left.img+")", position: "absolute", left:22, top:40, zIndex: 99, backgroundSize: "100% 100%"}}></div>
            );
        }
        return (
            <div style={{width: 30, height: 15, backgroundImage: "url("+eye_left.img+")", position: "absolute", left:22, top:40, zIndex: 99, backgroundSize: "100% 100%"}}></div>
        );
    }

    function renderEyeRight() {
        if(face.id === 1){
            return (
                <div style={{width: 30, height: 15, backgroundImage: "url("+eye_right.img+")", position: "absolute", right:5, top:40, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
            );
        }
        return (
            <div style={{width: 30, height: 15, backgroundImage: "url("+eye_right.img+")", position: "absolute", right:5, top:40, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
        );
    }

    function renderNose() {
        if(face.id === 1){
            return (
                <div style={{width: 20, height: 30, backgroundImage: "url("+nose.img+")", position: "absolute", left:50, top:50, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
            );
        }
        return (
            <div style={{width: 20, height: 30, backgroundImage: "url("+nose.img+")", position: "absolute", left:50, top:50, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
        );
    }

    function renderMouse() {
        if(face.id === 1){
            return (
                <div style={{width:30, height: 20, backgroundImage: "url("+mouse.img+")", position: "absolute", left:45, top:80, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
            );
        }
        return (
            <div style={{width: 30, height: 20, backgroundImage: "url("+mouse.img+")", position: "absolute", left:45, top:80, zIndex: 99, backgroundSize: "100% 100%", transform: "scaleX(-1)"}}></div>
        );
    }

    function selectVolos(e:any) {
        if(e == 1){
            setVolos({img: VOLOS1_IMG, id: 1})
        }else {
            setVolos({img: VOLOS2_IMG, id: 2})
        }
    }

    function selectFace(e:any) {
        if(e == 1){
            setFace({img: FACE1_IMG, id: 1})
        }else {
            setFace({img: FACE2_IMG, id: 2})
        }
    }

    function selectLeftBrow() {
        setBrow_left({img: BROW1_IMG, id: 1})
    }

    function selectRightBrow() {
        setBrow_right({img: BROW1_IMG, id: 1})
    }

    function selectLeftEye(e:any) {
        if(e == 1){
            setEye_left({img: EYE1_IMG, id: 1})
        }else {
            setEye_left({img: EYE2_IMG, id: 2})
        }
    }

    function selectRightEye(e:any) {
        if(e == 1){
            setEye_right({img: EYE1_IMG, id: 1})
        }else {
            setEye_right({img: EYE2_IMG, id: 2})
        }
    }

    function selectNose(e:any) {
        if(e == 1){
            setNose({img: NOSE1_IMG, id: 1})
        }else {
            setNose({img: NOSE2_IMG, id: 2})
        }
    }

    function selectMouse(e:any) {
        if(e == 1){
            setMouse({img: MOUSE1_IMG, id: 1})
        }else {
            setMouse({img: MOUSE2_IMG, id: 2})
        }
    }

  return (
    <div className="head-test">
        <div className="test-head" style={{width: 100, height: 120, position: "relative"}}>
            <div style={{width: "100%", height: "100%", backgroundImage: "url("+face.img+")", position: "absolute", top: 0, left: 0, backgroundSize: "cover"}}></div>
            {renderVolos()}
            {renderBrowLeft()}
            {renderBrowRight()}
            {renderEyeLeft()}
            {renderEyeRight()}
            {renderNose()}
            {renderMouse()}
        </div>
        <div className="test-navigation" style={{marginTop: 20}}>
            <p className="navigation__name">Форма</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectFace(1)}><img src={FACE1_IMG}/></div>
                <div className="list-item" onClick={() => selectFace(2)}><img src={FACE2_IMG}/></div>
            </div>
            <p className="navigation__name">Нос</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectNose(1)}><img src={NOSE1_IMG}/></div>
                <div className="list-item" onClick={() => selectNose(2)}><img src={NOSE2_IMG}/></div>
            </div>
            <p className="navigation__name">Левый глаз</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectLeftEye(1)}><img src={EYE1_IMG}/></div>
                <div className="list-item" onClick={() => selectLeftEye(2)}><img src={EYE2_IMG}/></div>
            </div>
            <p className="navigation__name">Правый глаз</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectRightEye(1)}><img src={EYE1_IMG}/></div>
                <div className="list-item" onClick={() => selectRightEye(2)}><img src={EYE2_IMG}/></div>
            </div>
            <p className="navigation__name">Рот</p>
            <div className="navigation-list">
                <div className="list-item"  onClick={() => selectMouse(1)}><img src={MOUSE1_IMG}/></div>
                <div className="list-item"  onClick={() => selectMouse(2)}><img src={MOUSE2_IMG}/></div>
            </div>
            <p className="navigation__name">Левая бровь</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectLeftBrow()}><img src={BROW1_IMG}/></div>
            </div>
            <p className="navigation__name">Правая бровь</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectRightBrow()}><img src={BROW1_IMG}/></div>
            </div>
            <p className="navigation__name">Волосы</p>
            <div className="navigation-list">
                <div className="list-item" onClick={() => selectVolos(1)}><img src={VOLOS1_IMG}/></div>
                <div className="list-item" onClick={() => selectVolos(2)}><img src={VOLOS2_IMG}/></div>
            </div>
        </div>
    </div>
  )
}

export default HeadContent
