/**
 * -----------------------------------
 * Play with these values
 * -----------------------------------
 */
const startY = 100;
const startOpacity = 0;

// Lower damping and stiffness here will exaggerate the
// Start of the sequence of animations
const initialStiffness = 400;
const initialDamping = 60;

// Lower damping and stiffness here will exaggerate the
// End of the sequence of animations
const finalStiffness = 400;
const finalDamping = 60;
/* ---------------------------------- */



export default class Dots extends React.Component {
  render() {
    const { StaggeredMotion, spring } = ReactMotion;

    const outterWrapperStyles = {
      width: '100%',
      height: '70%',
      display: 'flex',
      justifyContent: 'center',
      background: '#E0F7FA'
    }

    const innerWrapperStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      width: '15rem',
      height: '100%'
    }

    return (
      <div style={outterWrapperStyles}>
        <StaggeredMotion
          defaultStyles={[
            // Add more items here for more dots
            { y: startY, o: startOpacity },
            { y: startY, o: startOpacity },
            { y: startY, o: startOpacity },
            { y: startY, o: startOpacity }
          ]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              // Initial stiffness and damping
              ? { y: spring(0, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
              // Final stiffness and damping
              : {
                  y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                  o: spring(prevInterpolatedStyles[i - 1].o)
                };
          })}
        >
          {interpolatingStyles =>
            <div style={innerWrapperStyles}>
              {interpolatingStyles.map((style, i) => {
                const ballStyles = {
                  width: '3rem',
                  height: '3rem',
                  background: '#D84315',
                  borderRadius: '50%',
                  WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
                  opacity: style.o
                }

                return <div style={ballStyles} />;
              })}
            </div>
          }
        </StaggeredMotion>
      </div>
    );
  }
}
