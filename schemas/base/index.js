// import all schemas from ./base
import BlockContentContainer from './BlockContentContainer'
import BlockContentIcon from './BlockContentIcon'
import BlockContentMap from './BlockContentMap'
import BlockContentNodes from './BlockContentNodes'
import { BlockContent, BlockContents } from './BlockContent'
import { BlockContentButton, BlockContentButtons } from './BlockContentButton'
import { BlockContentText, BlockContentTexts, textGroup } from './BlockContentText'
import { BlockContentForm, BlockContentFormField, BlockContentFormFields } from './BlockContentForm'

import { 
    BlockContentImage,
    BlockContentImageSrc,
    ChildImageSharp,
    gatsbyImageData,
    placeholder,
    images,
    sourceObject,
    sourceObjects,
    effects,
    BlockContentImagePosition,
    BlockContentImages

} from './BlockContentImage'


// export all base data models to ../../schemas/index.js
export default [
    // BlockContentNode
    BlockContentNodes,

    // BlockContent
    BlockContent,
    BlockContents,

    // BlockContentButton
    BlockContentButton,
    BlockContentButtons,

    // BlockContentText
    BlockContentText,
    textGroup,
    BlockContentTexts,

    // BlockContentForm
    BlockContentForm,
    BlockContentFormField,
    BlockContentFormFields,
    
    // BlockContentImage
    BlockContentImage,
    BlockContentImageSrc,
    ChildImageSharp,
    gatsbyImageData,
    placeholder,
    images,
    sourceObject,
    sourceObjects,
    effects,
    BlockContentImagePosition,
    BlockContentImages,

    // BlockContentContainer
    BlockContentContainer,

    // BlockContentIcon
    BlockContentIcon,

    // BlockContentMap
    BlockContentMap
]