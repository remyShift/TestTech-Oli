import InteractionButton from "./InteractionButton"

export default function ProductInteractions() {
    return (
        <div className="flex gap-4 justify-end">
            <InteractionButton icon="arrow-up" text="SHARE" />
            <InteractionButton icon="plus" text="FAVORITE" />
        </div>
    )
}
