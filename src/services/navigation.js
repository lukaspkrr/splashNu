import {NavigationActions} from 'react-navigation';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

export {setNavigator, navigate, goBack};
