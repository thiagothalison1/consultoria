import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Navigation from 'material-ui/svg-icons/maps/navigation'

const Appointment = ({appointment, subtitle, avatar, backGroundColor, situation, label, openModal}) => (
    <Card zDepth={4}>
        <CardHeader
            title={appointment}
            subtitle={subtitle}
            avatar={avatar}
            style={{backgroundColor: backGroundColor}}
        />
        <CardText>
            <p>Situação: {situation}</p>
            <p>{ label }</p>
        </CardText>
        <CardActions style={{textAlign: 'right'}}>
            <FlatButton
                label="Obter Direção"
                icon={<Navigation />}
                onClick={openModal}
            />
        </CardActions>
    </Card>
)
  
export default Appointment
