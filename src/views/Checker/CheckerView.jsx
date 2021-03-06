import React from 'react';

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
import Email from '@material-ui/icons/Email';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import defaultImage from 'assets/img/default-avatar.png';

// material-ui icons
import Assignment from '@material-ui/icons/Assignment';

// core components
import Table from 'components/Table/Table.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import { cardTitle } from 'assets/jss/material-dashboard-pro-react.jsx';

const style = {
  pictureSrc: {
      maxWidth: '140px'
  },
  customCardContentClass: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px'
  }
};

class CheckerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnameState: '',
      lastname: '',
      lastnameState: '',
      email: '',
      emailState: '',
      imagePreviewUrl: defaultImage
    };
  }

  sendState() {
    return this.state;
  }

  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case 'length':
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + 'State']: 'success' });
        } else {
          this.setState({ [stateName + 'State']: 'error' });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.separatorSection} />

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={2}>
            <img
              src={this.state.imagePreviewUrl}
              className={classes.pictureSrc}
              alt="..."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Personal Info</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Data']}
                  tableData={[
                    ['First Name', 'Fatima'],
                    ['Last Name', 'Mazen'],
                    ['Age', '8'],
                    ['Country', 'Syria']
                  ]}
                  coloredColls={[3]}
                  colorsColls={['primary']}
                />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Medical records</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Data']}
                  tableData={[
                    ['Estatura', '1.20mts'],
                    ['Peso', '32 kgs'],
                    ['Grupo sanguineo', 'O+ '],
                    ['Antecedentes médicos', 'Anemia']
                  ]}
                  coloredColls={[3]}
                  colorsColls={['primary']}
                />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Financial records</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Data']}
                  tableData={[
                    ['Ocupación', 'Carpintero'],
                    ['Religión', 'Católica'],
                    ['Usos y costumbres', 'Tradiciones memorizadas y transmitidas desde generaciones ancestrales, originales, sin necesidad de un sistema de escritura; es decir, son actitudes. '],
                    ['Conocido por', 'Fabis']
                  ]}
                  coloredColls={[3]}
                  colorsColls={['primary']}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(CheckerView);
