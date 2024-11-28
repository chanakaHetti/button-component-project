'use client';

import Button from '@/app/components/button';

export default function Home() {
  const handleAction = () => {
    console.log('button click');
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Button Variants</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Green Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="green" buttonStyle="solid">
            Green Solid
          </Button>
          <Button color="green" buttonStyle="outline">
            Green Outline
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dark Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="dark" buttonStyle="solid">
            Dark Solid
          </Button>
          <Button color="dark" buttonStyle="outline">
            Dark Outline
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button disabled>Disabled</Button>
          <Button color="dark" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Full Width</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button fullWidth>Full Width</Button>
          <Button fullWidth color="dark">
            Full Width
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Onclick Action</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button onActionClick={handleAction}>Full Width</Button>
        </div>
      </div>
    </div>
  );
}
