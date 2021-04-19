import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import { NewsInterface } from '../../../../share/interface/image.interface'

const useStyles = makeStyles({
  root: {
    float: 'left',
    flexWrap: 'wrap',
    padding: '5px'
  },
  media: {
    height: 250
  }
})

type ManagementNewsProps = {
  data: NewsInterface[]
}
export default function ManagementNews({ data }: ManagementNewsProps) {
  const classes = useStyles()
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <Card key={item._id} style={{ width: '355px' }} className={classes.root}>
              <CardActionArea>
                <CardMedia component='i' className={classes.media} image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {/* <div dangerouslySetInnerHTML={{ __html: item.content as string }} /> */}
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Delete
                </Button>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          )
        })}
    </>
  )
}
