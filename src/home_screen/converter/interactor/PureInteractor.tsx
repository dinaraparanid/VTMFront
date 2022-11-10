import React, {memo} from "react";
import {InteractorProps} from "./InteractorProps";
import Interactor from "./Interactor";

const PureInteractor = memo(
    ({videoInfo, urlEditorProps, videoGetterProps}: InteractorProps) =>
        <Interactor videoInfo={videoInfo} urlEditorProps={urlEditorProps} videoGetterProps={videoGetterProps}/>,
        (oldInteractorProps, newInteractorProps) =>
            InteractorProps.equals(oldInteractorProps, newInteractorProps)
)

export default PureInteractor