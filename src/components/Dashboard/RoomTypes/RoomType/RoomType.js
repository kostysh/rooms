import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import TextEditInput from '../../../base/TextEditInput/TextEditInput'

const useStyles = () => {
  return {
    grow: {
      flexGrow: 1,
    },
    room_type_card: {
      width: '26em',
      marginTop: '1em',
      marginBottom: '1em',
    },
    price_currency: {
      display: 'inline',
      position: 'relative',
      top: '20px',
      left: '10px',
    },
  }
}

class RoomType extends React.Component {
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id)
  }

  handleTypeChange = (e) => {
    this.props.onPropValueChange(this.props.id, 'type', e)
  }

  handleQuantityChange = (e) => {
    this.props.onPropValueChange(this.props.id, 'quantity', e)
  }

  handlePriceChange = (e) => {
    this.props.onPropValueChange(this.props.id, 'price', e)
  }

  render() {
    const { classes } = this.props

    return (
      <Card className={classes.room_type_card}>
        <CardContent>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Grid item>
              <TextEditInput
                value={this.props.type}
                label="Type"
                onValueChange={this.handleTypeChange}
                inputWidth="150"
              />
              <TextEditInput
                value={this.props.quantity}
                label="Quantity"
                onValueChange={this.handleQuantityChange}
                inputWidth="75"
              />
            </Grid>
            <Grid item>
              <TextEditInput
                value={this.props.price}
                label="Price"
                onValueChange={this.handlePriceChange}
                inputWidth="90"
              />
              <div className={classes.price_currency}>USD</div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <div className={classes.grow}></div>

          <IconButton aria-label="edit" onClick={this.props.onEditClick}>
            <EditIcon />
          </IconButton>

          <IconButton aria-label="delete" onClick={this.handleTrashClick}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(useStyles)(RoomType)