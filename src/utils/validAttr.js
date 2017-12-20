// @flow
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * Regenerate the regex with: https://github.com/devongovett/regexgen
 **/
/*
 children  dangerouslySetInnerHTML  key  ref  autoFocus  defaultValue  valueLink  defaultChecked  checkedLink  innerHTML  suppressContentEditableWarning  onFocusIn  onFocusOut  className  onCopy  onCut  onPaste  onCompositionEnd  onCompositionStart  onCompositionUpdate  onKeyDown  onKeyPress  onKeyUp  onFocus  onBlur  onChange  onInput  onSubmit  onReset  onClick  onContextMenu  onDoubleClick  onDrag  onDragEnd  onDragEnter  onDragExit  onDragLeave  onDragOver  onDragStart  onDrop  onMouseDown  onMouseEnter  onMouseLeave  onMouseMove  onMouseOut  onMouseOver  onMouseUp  onSelect  onTouchCancel  onTouchEnd  onTouchMove  onTouchStart  onScroll  onWheel  onAbort  onCanPlay  onCanPlayThrough  onDurationChange  onEmptied  onEncrypted  onEnded  onError  onLoadedData  onLoadedMetadata  onLoadStart  onPause  onPlay  onPlaying  onProgress  onRateChange  onSeeked  onSeeking  onStalled  onSuspend  onTimeUpdate  onVolumeChange  onWaiting  onLoad  onAnimationStart  onAnimationEnd  onAnimationIteration  onTransitionEnd  onCopyCapture  onCutCapture  onPasteCapture  onCompositionEndCapture  onCompositionStartCapture  onCompositionUpdateCapture  onKeyDownCapture  onKeyPressCapture  onKeyUpCapture  onFocusCapture  onBlurCapture  onChangeCapture  onInputCapture  onSubmitCapture  onResetCapture  onClickCapture  onContextMenuCapture  onDoubleClickCapture  onDragCapture  onDragEndCapture  onDragEnterCapture  onDragExitCapture  onDragLeaveCapture  onDragOverCapture  onDragStartCapture  onDropCapture  onMouseDownCapture  onMouseEnterCapture  onMouseLeaveCapture  onMouseMoveCapture  onMouseOutCapture  onMouseOverCapture  onMouseUpCapture  onSelectCapture  onTouchCancelCapture  onTouchEndCapture  onTouchMoveCapture  onTouchStartCapture  onScrollCapture  onWheelCapture  onAbortCapture  onCanPlayCapture  onCanPlayThroughCapture  onDurationChangeCapture  onEmptiedCapture  onEncryptedCapture  onEndedCapture  onErrorCapture  onLoadedDataCapture  onLoadedMetadataCapture  onLoadStartCapture  onPauseCapture  onPlayCapture  onPlayingCapture  onProgressCapture  onRateChangeCapture  onSeekedCapture  onSeekingCapture  onStalledCapture  onSuspendCapture  onTimeUpdateCapture  onVolumeChangeCapture  onWaitingCapture  onLoadCapture  onAnimationStartCapture  onAnimationEndCapture  onAnimationIterationCapture  onTransitionEndCapture  accept  acceptCharset  accessKey  action  allowFullScreen  allowTransparency  alt  as  async  autoComplete  autoPlay  capture  cellPadding  cellSpacing  charSet  challenge  checked  cite  classID  className  cols  colSpan  content  contentEditable  contextMenu  controls  coords  crossOrigin  data  dateTime  default  defer  dir  disabled  download  draggable  encType  form  formAction  formEncType  formMethod  formNoValidate  formTarget  frameBorder  headers  height  hidden  high  href  hrefLang  htmlFor  httpEquiv  icon  id  inputMode  integrity  is  keyParams  keyType  kind  label  lang  list  loop  low  manifest  marginHeight  marginWidth  max  maxLength  media  mediaGroup  method  min  minLength  multiple  muted  name  nonce  noValidate  open  optimum  pattern  placeholder  playsInline  poster  preload  profile  radioGroup  readOnly  referrerPolicy  rel  required  reversed  role  rows  rowSpan  sandbox  scope  scoped  scrolling  seamless  selected  shape  size  sizes  span  spellCheck  src  srcDoc  srcLang  srcSet  start  step  style  summary  tabIndex  target  title  type  useMap  value  width  wmode  wrap  about  datatype  inlist  prefix  property  resource  typeof  vocab  autoCapitalize  autoCorrect  autoSave  color  itemProp  itemScope  itemType  itemID  itemRef  results  security  unselectable  accentHeight  accumulate  additive  alignmentBaseline  allowReorder  alphabetic  amplitude  arabicForm  ascent  attributeName  attributeType  autoReverse  azimuth  baseFrequency  baseProfile  baselineShift  bbox  begin  bias  by  calcMode  capHeight  clip  clipPath  clipRule  clipPathUnits  colorInterpolation  colorInterpolationFilters  colorProfile  colorRendering  contentScriptType  contentStyleType  cursor  cx  cy  d  decelerate  descent  diffuseConstant  direction  display  divisor  dominantBaseline  dur  dx  dy  edgeMode  elevation  enableBackground  end  exponent  externalResourcesRequired  fill  fillOpacity  fillRule  filter  filterRes  filterUnits  floodColor  floodOpacity  focusable  fontFamily  fontSize  fontSizeAdjust  fontStretch  fontStyle  fontVariant  fontWeight  format  from  fx  fy  g1  g2  glyphName  glyphOrientationHorizontal  glyphOrientationVertical  glyphRef  gradientTransform  gradientUnits  hanging  horizAdvX  horizOriginX  ideographic  imageRendering  in  in2  intercept  k  k1  k2  k3  k4  kernelMatrix  kernelUnitLength  kerning  keyPoints  keySplines  keyTimes  lengthAdjust  letterSpacing  lightingColor  limitingConeAngle  local  markerEnd  markerMid  markerStart  markerHeight  markerUnits  markerWidth  mask  maskContentUnits  maskUnits  mathematical  mode  numOctaves  offset  opacity  operator  order  orient  orientation  origin  overflow  overlinePosition  overlineThickness  paintOrder  panose1  pathLength  patternContentUnits  patternTransform  patternUnits  pointerEvents  points  pointsAtX  pointsAtY  pointsAtZ  preserveAlpha  preserveAspectRatio  primitiveUnits  r  radius  refX  refY  renderingIntent  repeatCount  repeatDur  requiredExtensions  requiredFeatures  restart  result  rotate  rx  ry  scale  seed  shapeRendering  slope  spacing  specularConstant  specularExponent  speed  spreadMethod  startOffset  stdDeviation  stemh  stemv  stitchTiles  stopColor  stopOpacity  strikethroughPosition  strikethroughThickness  string  stroke  strokeDasharray  strokeDashoffset  strokeLinecap  strokeLinejoin  strokeMiterlimit  strokeOpacity  strokeWidth  surfaceScale  systemLanguage  tableValues  targetX  targetY  textAnchor  textDecoration  textRendering  textLength  to  transform  u1  u2  underlinePosition  underlineThickness  unicode  unicodeBidi  unicodeRange  unitsPerEm  vAlphabetic  vHanging  vIdeographic  vMathematical  values  vectorEffect  version  vertAdvY  vertOriginX  vertOriginY  viewBox  viewTarget  visibility  widths  wordSpacing  writingMode  x  xHeight  x1  x2  xChannelSelector  xlinkActuate  xlinkArcrole  xlinkHref  xlinkRole  xlinkShow  xlinkTitle  xlinkType  xmlBase  xmlns  xmlnsXlink  xmlLang  xmlSpace  y  y1  y2  yChannelSelector  z  zoomAndPan
*/
/* eslint-enable max-len */

const ATTRIBUTE_REGEX = /(?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz]/

/* From DOMProperty */
const ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD'
const ATTRIBUTE_NAME_CHAR = `${ATTRIBUTE_NAME_START_CHAR}\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040`
const isCustomAttribute = RegExp.prototype.test.bind(
  new RegExp(`^(data|aria)-[${ATTRIBUTE_NAME_CHAR}]*$`),
)

export default (name: string) =>
  name.search(ATTRIBUTE_REGEX) !== -1 || isCustomAttribute(name.toLowerCase())
