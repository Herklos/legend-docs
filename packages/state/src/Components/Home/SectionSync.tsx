import { observable } from "@legendapp/state";
import {
  Memo,
  Reactive,
  observer,
  useObservable,
} from "@legendapp/state/react";
import { useRef } from "react";
import { Button } from "shared/src/Components/Button";
import { Editor } from "shared/src/Components/Editor/Editor";
import { FlashingDiv } from "../FlashingDiv/FlashingDiv";
import { DemoBox } from "./Components";
import { Header } from "./Header";
import { Text } from "./Text";

const CodeDemoTop = `
const profile$ = observable(syncedFetch({
  get: 'https://myurl/my-profile',
  set: 'https://myurl/my-profile',
  persist: {
    plugin: ObservablePersistLocalStorage,
    name: 'profile',
  },
}))

const Component = observer(() => {
  // get triggers the fetch and re-runs on change
  const name = profile$.name.get()

  const onClick = () => {
    // set sets the local state and syncs to remote
    profile$.name.set('Annyong')
  }

  // Two-way bind to remote data
  return <Reactive.input $value={$name} />
})
`;

const DemoEasy = () => {
  return (
    <Editor
      code={CodeDemoTop}
      noInline
      renderCode={`;render(<div><Box><EasyComponent /></Box></div>)`}
      showEditing={false}
      scope={{
        useRef,
        useObservable,
        Button,
        Memo,
        observable,
        Box: DemoBox,
        FlashingDiv,
        Reactive,
        observer,
      }}
      classNameEditor="home-editor"
      hideDemo
      noError
    />
  );
};

export const SectionSync = () => {
  return (
    <div className="flex !mt-24 gap-16">
      <div className="flex-1 pt-12">
        <Header size="h2" className="text-nowrap">Local State = Remote State</Header>
        <Text className="pt-2">
          Just get and set observables and they{" "}
          <span className="text-white">sync themselves</span> with a powerful
          sync engine. Your UI code doesn't need to be full of querying,
          sending back mutations, and synchronizing with local state anymore.
        </Text>
        <Text className="pt-2">
          You can even bind UI components directly to synced observables.
        </Text>
        <Text className="pt-2">It just works.</Text>
      </div>
      <div className="max-w-lg flex-2 !mt-0 [&>div]:!mt-0">
        <DemoEasy />
      </div>
    </div>
  );
};
