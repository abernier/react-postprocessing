import { ScanlineEffect, BlendFunction } from 'postprocessing'
import { wrapEffect } from '../util'

export const Scanline = wrapEffect(ScanlineEffect, { blendFunction: BlendFunction.OVERLAY })
