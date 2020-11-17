import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';

import { LightningMode } from '../types';
import IncludedBands from '../components/IncludedBands';
import ColorPicker from '../components/ColorPicker';
import { audioLightMode, AudioLightModeProps } from './AudioLightMode';

type AudioLightLightningModeProps = AudioLightModeProps<LightningMode>;

class AudioLightLightningMode extends React.Component<AudioLightLightningModeProps> {

  render() {
    const { data, handleChange, handleSliderChange, handleColorChange } = this.props;

    return (
      <div>
        <FormLabel>Color</FormLabel>
        <ColorPicker
          color={data.color}
          onChange={handleColorChange("color")}
        />

        <FormLabel>Brightness</FormLabel>
        <Slider
          min={0}
          max={255}
          step={1}
          value={data.brightness}
          onChange={handleSliderChange('brightness')}
        />

        <FormLabel>Flashes</FormLabel>
        <Slider
          min={1}
          max={20}
          step={1}
          value={data.flashes}
          onChange={handleSliderChange('flashes')}
        />

        <FormLabel>Threshold</FormLabel>
        <Slider
          min={0}
          max={255}
          step={1}
          value={data.threshold}
          onChange={handleSliderChange('threshold')}
        />

        <FormLabel>Included Bands</FormLabel>
        <IncludedBands
          value={data.included_bands}
          onChange={handleChange('included_bands')}
        />
      </div>
    );
  }
}

export default audioLightMode(AudioLightLightningMode);
