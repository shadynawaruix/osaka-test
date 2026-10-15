<template>
  <!--
  <div>
      <button ref="menu" v-bind="$attrs" >
          <slot></slot>
      </button>

      <Teleport v-if="open" to="body">
          <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
          >
              <div
                  class="fixed z-20 w-56 divide-y divide-gray-100 rounded bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  :style="dropdownStyle"
              >
                  <div
                      v-for="item in items"
                      :key="item.id"
                      class=""
                  >
                      <button
                          class="relative px-3 py-2 text-gray-800 group flex w-full items-center rounded"
                          @click="onItemClicked(item.id)"
                      >
                          <div class="absolute inset-1 rounded hover:bg-gray-100"></div>
                          <div class="relative">
                              {{item.label}}
                          </div>
                      </button>
                  </div>
              </div>
          </transition>
      </Teleport>
  </div>
  -->

    <Menu>
        <MenuButton v-bind="$attrs" class="" ref="menu">
            <slot></slot>
        </MenuButton>

        <Teleport v-if="open" to="body">
            <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                        class="fixed z-50 w-32 divide-y divide-gray-100 bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        :style="dropdownStyle"
                >
                    <MenuItem
                            as="div"
                            v-for="(item, index) in items"
                            :key="item.id"
                            class=""
                            v-slot="{ active }"
                    >
                        <button
                                class="relative px-3 py-2 group flex w-full items-center"
                                @click="onItemClicked(item.id)"
                        >
                            <div
                                    class="absolute inset-0 inset-y-1"
                                    :class="active ? 'bg-slate-100' : ''"
                            ></div>
                            <div class="absolute left-0 top-1 bottom-1 w-0.5 bg-red-700"
                                 v-if="item.id === current"></div>
                            <div class="relative" :class="item.id === current ? 'text-red-700' : 'text-gray-800'">
                                {{ item.label }}
                            </div>
                        </button>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Teleport>
    </Menu>

</template>

<script lang="ts">
export default {
    inheritAttrs: false
};
</script>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/vue";
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import {computed, getCurrentInstance, ref, useSlots, watch} from "vue";
import {useElementBounding, useMutationObserver, useWindowSize} from "@vueuse/core";

const props = defineProps<{
    current?: string,
    items: {
        label: string,
        id: string,
    }[]
}>();

const {emit} = getCurrentInstance()!;

const menu = ref<HTMLElement>();
const open = ref<boolean>(false);

const windowSize = useWindowSize();
const bounds = useElementBounding(menu);
const invertDirectionY = computed(() => bounds.bottom.value > windowSize.height.value - (props.items?.length || 0) * 50);
const invertDirectionX = computed(() => bounds.right.value > windowSize.width.value - 200);
const dropdownStyle = computed(() =>
{
    const y =
        invertDirectionY.value
            ? {bottom: (windowSize.height.value - bounds.top.value - 5) + "px"}
            : {top: (bounds.y.value + bounds.height.value + 5) + "px"}

    const x =
        invertDirectionX.value
            ? {right: (windowSize.width.value - bounds.x.value - bounds.width.value + 5) + "px"}
            : {left: (bounds.x.value + 5) + "px"};

    const origin =
        invertDirectionX.value
            ? {transformOrigin: "top right"}
            : {transformOrigin: "top left"}

    return Object.assign({}, x, y, origin);
});

useMutationObserver(menu, (mutations) =>
{
    mutations.forEach(m =>
    {
        if (m.attributeName == "data-headlessui-state")
            onOpenStateChanged(m.target as HTMLElement);
    });
}, {attributes: true});

function onOpenStateChanged(element: HTMLElement)
{
    const menuElement = menu.value;
    if (menuElement)
    {
        bounds.update();

        const isOpen = element.getAttribute("data-headlessui-state") === "open";
        if (isOpen != open.value)
        {
            open.value = isOpen;

            try
            {
                if (open.value)
                    emit("open");
                else
                    emit("close");
            }
            catch (error)
            {
                console.error(error);
            }
        }
    }
}

function onItemClicked(item: string)
{
    if (item.includes("-disabled"))
        return;

    emit("select", item);
}

</script>
